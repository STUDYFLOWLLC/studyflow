import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardUpdateInput } from "../../../inputs/FlashcardUpdateInput";
import { FlashcardWhereUniqueInput } from "../../../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlashcardArgs {
  @TypeGraphQL.Field(_type => FlashcardUpdateInput, {
    nullable: false
  })
  data!: FlashcardUpdateInput;

  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: false
  })
  where!: FlashcardWhereUniqueInput;
}
