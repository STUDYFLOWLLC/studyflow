import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardCreateInput } from "../../../inputs/FlashCardCreateInput";
import { FlashCardUpdateInput } from "../../../inputs/FlashCardUpdateInput";
import { FlashCardWhereUniqueInput } from "../../../inputs/FlashCardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlashCardArgs {
  @TypeGraphQL.Field(_type => FlashCardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashCardCreateInput, {
    nullable: false
  })
  create!: FlashCardCreateInput;

  @TypeGraphQL.Field(_type => FlashCardUpdateInput, {
    nullable: false
  })
  update!: FlashCardUpdateInput;
}
