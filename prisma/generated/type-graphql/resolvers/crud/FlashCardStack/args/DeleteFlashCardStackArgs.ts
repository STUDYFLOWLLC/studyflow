import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardStackWhereUniqueInput } from "../../../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteFlashCardStackArgs {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;
}
