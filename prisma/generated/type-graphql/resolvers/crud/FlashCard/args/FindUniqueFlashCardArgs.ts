import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardWhereUniqueInput } from "../../../inputs/FlashCardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFlashCardArgs {
  @TypeGraphQL.Field(_type => FlashCardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardWhereUniqueInput;
}