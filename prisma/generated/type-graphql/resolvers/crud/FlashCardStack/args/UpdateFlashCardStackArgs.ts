import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardStackUpdateInput } from "../../../inputs/FlashCardStackUpdateInput";
import { FlashCardStackWhereUniqueInput } from "../../../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFlashCardStackArgs {
  @TypeGraphQL.Field(_type => FlashCardStackUpdateInput, {
    nullable: false
  })
  data!: FlashCardStackUpdateInput;

  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: false
  })
  where!: FlashCardStackWhereUniqueInput;
}
