import dotenv from "dotenv";
dotenv.config();

import { API_PATHS } from "./shared/constants/apiPaths";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,

  schema: `${process.env.NEXT_PUBLIC_API_URL}/${API_PATHS.CLIENT}`,

  // chỗ này có thể để ở trên generates hoặc bên trong như bạn đang làm, mình để ở ngoài cho gọn
  documents: ["features/**/*.{gql,graphql}", "shared/**/*.{gql,graphql}"],

  generates: {
    "shared/generated/schemas.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo", // 👈 plugin gen hooks
      ],
      config: {
        withHooks: true, // gen useXxxQuery/useXxxMutation
        withHOC: false, // không cần HOC cũ
        withComponent: false, // không cần component kiểu cũ
      },
    },
  },
};

export default config;
