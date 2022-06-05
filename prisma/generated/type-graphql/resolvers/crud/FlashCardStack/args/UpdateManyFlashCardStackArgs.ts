import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardStackUpdateManyMutationInput } from "../../../inputs/FlashCardStackUpdateManyMutationInput";
import { FlashCardStackWhereInput } from "../../../inputs/FlashCardStackWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlashCardStackArgs {
  @TypeGraphQL.Field(_type => FlashCardStackUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashCardStackUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlashCardStackWhereInput, {
    nullable: true
  })
  where?: FlashCardStackWhereInput | undefined;
}
