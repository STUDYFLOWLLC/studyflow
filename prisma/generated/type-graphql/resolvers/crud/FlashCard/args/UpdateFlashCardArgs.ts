import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardUpdateInput } from "../../../inputs/FlashCardUpdateInput";
import { FlashCardWhereUniqueInput } from "../../../inputs/FlashCardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlashCardArgs {
  @TypeGraphQL.Field(_type => FlashCardUpdateInput, {
    nullable: false
  })
  data!: FlashCardUpdateInput;

  @TypeGraphQL.Field(_type => FlashCardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardWhereUniqueInput;
}
