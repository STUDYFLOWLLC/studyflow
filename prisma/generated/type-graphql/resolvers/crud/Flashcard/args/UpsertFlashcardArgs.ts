import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardCreateInput } from "../../../inputs/FlashcardCreateInput";
import { FlashcardUpdateInput } from "../../../inputs/FlashcardUpdateInput";
import { FlashcardWhereUniqueInput } from "../../../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFlashcardArgs {
  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlashcardCreateInput, {
    nullable: false
  })
  create!: FlashcardCreateInput;

  @TypeGraphQL.Field(_type => FlashcardUpdateInput, {
    nullable: false
  })
  update!: FlashcardUpdateInput;
}
