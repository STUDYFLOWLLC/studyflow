import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackScalarWhereInput } from "../inputs/FlashCardStackScalarWhereInput";
import { FlashCardStackUpdateManyMutationInput } from "../inputs/FlashCardStackUpdateManyMutationInput";

@TypeGraphQL.InputType("FlashCardStackUpdateManyWithWhereWithoutFK_UserInput", {
  isAbstract: true
})
export class FlashCardStackUpdateManyWithWhereWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlashCardStackScalarWhereInput, {
    nullable: false
  })
  where!: FlashCardStackScalarWhereInput;

  @TypeGraphQL.Field(_type => FlashCardStackUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashCardStackUpdateManyMutationInput;
}
