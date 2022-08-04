import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardUpdateManyMutationInput } from "../../../inputs/FlashcardUpdateManyMutationInput";
import { FlashcardWhereInput } from "../../../inputs/FlashcardWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlashcardArgs {
  @TypeGraphQL.Field(_type => FlashcardUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashcardUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlashcardWhereInput, {
    nullable: true
  })
  where?: FlashcardWhereInput | undefined;
}
