
/*
*	sha_512 (funct): sub-routine returns SHA-512 hash of string s
* 	hmac_sha512 (funct): sub-routine returns HMAC hash of string s using key k
*   to_base (funct): sub-routine returns hash h to string base b 
*	mk (string): master key 
*   ks (array): array of string keys
* 	l (number): disired length of the output
*   b (number): desired output base (58/64/85) 
*/

const sha_512 = s => {}					
const hmac_sha512 = (s, k) => {}
const to_base = (h, b) => {}	

const generate_hash = (mk, l, ks) => {
	let hash = hmac_sha512(l, mk)

	ks.forEach(k => {
		hash = hmac_sha512(hash, k)
	})

	return hash
}

const generate_password = (mk, ks, l, b) =>{
	let password = "";
	let hash = generate_hash(mk, l.toString(), ks);

	while( password.length < l ){
		password += to_base(hash, b);
		hash = sha_512(hash);
	}

	return password.slice(0, l);
}










