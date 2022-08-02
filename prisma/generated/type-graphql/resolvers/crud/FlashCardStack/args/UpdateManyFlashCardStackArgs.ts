import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackUpdateManyMutationInput } from "../../../inputs/FlashcardStackUpdateManyMutationInput";
import { FlashcardStackWhereInput } from "../../../inputs/FlashcardStackWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlashcardStackArgs {
  @TypeGraphQL.Field(_type => FlashcardStackUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashcardStackUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlashcardStackWhereInput, {
    nullable: true
  })
  where?: FlashcardStackWhereInput | undefined;
}
