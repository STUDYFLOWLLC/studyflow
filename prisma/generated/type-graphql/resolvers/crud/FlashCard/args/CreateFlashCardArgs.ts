import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardCreateInput } from "../../../inputs/FlashCardCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFlashCardArgs {
  @TypeGraphQL.Field(_type => FlashCardCreateInput, {
    nullable: false
  })
  data!: FlashCardCreateInput;
}
