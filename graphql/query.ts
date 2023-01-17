import { gql } from "@apollo/client";

export const GET_S3_PRESIGNED_URL = gql`
  query GetS3PreSignedUrlPublicUpload($fileNames: [String!]) {
    GetS3PreSignedUrlPublicUpload(fileNames: $fileNames) {
      urls {
        delete
        file
        get
        key
        put
      }
    }
  }
`;
