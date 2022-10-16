import { gql } from 'apollo-server-express';

export default /* GraphQL */ gql`
	type AuthUser {
		token: String
		user: User
	}

	type Mutation {
		""" It allows users to register """
		registerUser(email: String!, password: String!, name: String!): AuthUser

		""" It allows users to authenticate """
		authUser(email: String!, password: String!): AuthUser

		""" It allows to user to delete their account permanently """
		deleteMyUserAccount: DeleteResult
	}
`;