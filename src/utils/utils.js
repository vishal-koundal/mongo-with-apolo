'use strict';

const jwt = require('jsonwebtoken');

/**
 * Create a new JsonWebToken
 * @param {Object} 		userData 			- Payload object
 * @param {String} 		userData.email 		- Payload data: User email
 * @param {Boolean} 	userData.isAdmin 	- Payload data: If user is admin or not
 * @param {Boolean} 	userData.isActive 	- Payload data: If user is active or not
 * @param {String} 		secreto 			- Secret or private key
 * @param {String} 		[tiempoExpiracion] 	- Time of token expiration. Default value '2h'
 * @returns	{String}						- Json Web Token
 */
const crearToken = ({ email, isAdmin, isActive }, secreto, tiempoExpiracion = '2h') => {
	return jwt.sign({ email, isAdmin, isActive }, secreto, { expiresIn: tiempoExpiracion });
};

/**
 * Get all IP address of the server
 * @param {Object|undefined} [{}] - An object.
 * @param {Boolean} [obj.skipLocalhost=false] Determines if the localhost address is returned in the result list
 * @return {Array}                          Array of IPs
 */
const getListOfIPV4Address = ({ skipLocalhost = false } = {}) => {
	const os = require('os');
	const ifaces = os.networkInterfaces();

	let result = [];

	Object.keys(ifaces).forEach(function (ifname) {
		ifaces[ifname].forEach(function (iface) {
			// skip non-ipv4 addresses
			if ('IPv4' !== iface.family) {
				return;
			}

			if (skipLocalhost) {
				// skip over internal (i.e. 127.0.0.1)
				if (iface.internal !== false) {
					return;
				}
			}

			result.push(iface.address);
		});
	});

	return result;
};

module.exports = {
	crearToken,
	getListOfIPV4Address
};