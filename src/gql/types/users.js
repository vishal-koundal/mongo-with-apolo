import { gql } from 'apollo-server-express';

export default /* GraphQL */ gql`
	type User {
		email: String
		name: String
		isAdmin: Boolean
		isActive: Boolean
		uuid: String
		registrationDate: String
		lastLogin: String
	}

	type Query {
		""" Get list of all users registered on database """
		listAllUsers: [User]
	}
`;