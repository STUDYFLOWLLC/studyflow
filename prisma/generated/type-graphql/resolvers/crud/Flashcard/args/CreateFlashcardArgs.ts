import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardCreateInput } from "../../../inputs/FlashcardCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFlashcardArgs {
  @TypeGraphQL.Field(_type => FlashcardCreateInput, {
    nullable: false
  })
  data!: FlashcardCreateInput;
}
