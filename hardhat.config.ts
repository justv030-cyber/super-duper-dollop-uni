import { defineConfig } from "hardhat/config";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  solidity: {
    version: "0.8.34",
  },

  networks: {
    sepolia: {
      type: "http",
      url: process.env.RPC_URL || "",
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
});