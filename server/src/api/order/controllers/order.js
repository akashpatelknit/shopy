// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { email, products } = ctx.request.body;
    // console.log(ctx.request.body)
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          // console.log('product',product)

          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "?success=true",
        cancel_url: process.env.CLIENT_URL + "?success=false",
        line_items: lineItems,
      });
      // console.log('session',session)
      const data = await strapi
        .service("api::order.order")
        .create({ data: { stripeid: session.id, product: products } });
      console.log("data", data);
      return { stripeSession: session };
    } catch (error) {
      // console.log('error')
      ctx.response.status = 500;
      return { error };
    }
  },
}));
