import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackUpdateInput } from "../../../inputs/FlashcardStackUpdateInput";
import { FlashcardStackWhereUniqueInput } from "../../../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlashcardStackArgs {
  @TypeGraphQL.Field(_type => FlashcardStackUpdateInput, {
    nullable: false
  })
  data!: FlashcardStackUpdateInput;

  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardStackWhereUniqueInput;
}
