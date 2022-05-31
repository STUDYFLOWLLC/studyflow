import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardStackCreateInput } from "../../../inputs/FlashCardStackCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFlashCardStackArgs {
  @TypeGraphQL.Field(_type => FlashCardStackCreateInput, {
    nullable: false
  })
  data!: FlashCardStackCreateInput;
}
