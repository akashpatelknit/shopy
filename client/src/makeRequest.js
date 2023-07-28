import axios from 'axios';
export const makeRequest = axios.create({
	baseURL: `https://shopy-server-70ge.onrender.com/api`,
	headers: {
		Authorization:
			'bearer' +
			'90d0375da7d89c7a4c4368650bdf58840f79fce8821acbe1c1895ce0fa373e8da64ed9d281e1f31014abc110f8e6e091b54c797779ffceab7b7bad468efdff6575f7e76425ee7a0543945b202ea8d1fe9f428ab3e473c228745d47216fe6f1108c373db57bc6611d78ab16b20ede68c5322c27c01aee25e5cffbef67b1c17f06',
	},
});
