import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardUpdateManyMutationInput } from "../../../inputs/FlashCardUpdateManyMutationInput";
import { FlashCardWhereInput } from "../../../inputs/FlashCardWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFlashCardArgs {
  @TypeGraphQL.Field(_type => FlashCardUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashCardUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FlashCardWhereInput, {
    nullable: true
  })
  where?: FlashCardWhereInput | undefined;
}
