import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardStackCreateInput } from "../../../inputs/FlashCardStackCreateInput";
import { FlashCardStackUpdateInput } from "../../../inputs/FlashCardStackUpdateInput";
import { FlashCardStackWhereUniqueInput } from "../../../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlashCardStackArgs {
  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardStackCreateInput, {
    nullable: false
  })
  create!: FlashCardStackCreateInput;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateInput, {
    nullable: false
  })
  update!: FlashCardStackUpdateInput;
}
