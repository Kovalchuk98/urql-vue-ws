import type { IGraphQLConfig } from 'graphql-config'
import type { CodegenConfig } from '@graphql-codegen/cli'
import { config } from 'dotenv'

const schema = 'src/gql/schema.graphql'
config()

const codegen: CodegenConfig = {
  ignoreNoDocuments: true, // for better experience with the watcher

  hooks: { afterOneFileWrite: ['eslint --fix'] },
  generates: {
    'src/gql/dto.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-urql'],
      config: {
        withCompositionFunctions: true,
        vueCompositionApiImportFrom: 'vue',
        useTypeImports: true
      }
    }
  }
}

const gqlConfig: IGraphQLConfig = {

  schema: [process.env.API_BASE_URL || '', schema],

  documents: [
    // 'src/**/*.vue',
    'src/gql/**/*.gql'
  ],
  extensions: {
    customDirectives: ['directive @client on FIELD'],
    codegen
  }

}

export default gqlConfig
