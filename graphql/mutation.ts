import { gql } from "graphql-request";

export const SEND_MESSAGE = gql`
  mutation SendMessage(
    $username: String!
    $question: String!
    $temporarySenderUserId: String!
    $ipAddress: String!
    $networkProvider: String!
    $browserName: String!
    $countryName: String!
    $approxLocation: String!
    $answerText: String
  ) {
    SendMessage(
      username: $username
      question: $question
      temporary_sender_user_id: $temporarySenderUserId
      ip_address: $ipAddress
      network_provider: $networkProvider
      browser_name: $browserName
      country_name: $countryName
      approx_location: $approxLocation
      answer_text: $answerText
    ) {
      json
      status
      message
    }
  }
`;
