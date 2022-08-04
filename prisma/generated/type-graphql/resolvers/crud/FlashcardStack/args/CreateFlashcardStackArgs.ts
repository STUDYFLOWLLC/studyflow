import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackCreateInput } from "../../../inputs/FlashcardStackCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFlashcardStackArgs {
  @TypeGraphQL.Field(_type => FlashcardStackCreateInput, {
    nullable: false
  })
  data!: FlashcardStackCreateInput;
}
