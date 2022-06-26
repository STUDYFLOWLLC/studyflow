import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardScalarWhereInput } from "../inputs/FlashCardScalarWhereInput";
import { FlashCardUpdateManyMutationInput } from "../inputs/FlashCardUpdateManyMutationInput";

@TypeGraphQL.InputType("FlashCardUpdateManyWithWhereWithoutFK_FlashCardStackInput", {
  isAbstract: true
})
export class FlashCardUpdateManyWithWhereWithoutFK_FlashCardStackInput {
  @TypeGraphQL.Field(_type => FlashCardScalarWhereInput, {
    nullable: false
  })
  where!: FlashCardScalarWhereInput;

  @TypeGraphQL.Field(_type => FlashCardUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashCardUpdateManyMutationInput;
}
