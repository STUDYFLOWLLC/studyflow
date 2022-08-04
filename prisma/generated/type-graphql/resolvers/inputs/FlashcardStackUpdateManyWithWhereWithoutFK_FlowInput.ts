import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackScalarWhereInput } from "../inputs/FlashcardStackScalarWhereInput";
import { FlashcardStackUpdateManyMutationInput } from "../inputs/FlashcardStackUpdateManyMutationInput";

@TypeGraphQL.InputType("FlashcardStackUpdateManyWithWhereWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlashcardStackUpdateManyWithWhereWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => FlashcardStackScalarWhereInput, {
    nullable: false
  })
  where!: FlashcardStackScalarWhereInput;

  @TypeGraphQL.Field(_type => FlashcardStackUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashcardStackUpdateManyMutationInput;
}
