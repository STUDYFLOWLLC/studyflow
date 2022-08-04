import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardScalarWhereInput } from "../inputs/FlashcardScalarWhereInput";
import { FlashcardUpdateManyMutationInput } from "../inputs/FlashcardUpdateManyMutationInput";

@TypeGraphQL.InputType("FlashcardUpdateManyWithWhereWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardUpdateManyWithWhereWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => FlashcardScalarWhereInput, {
    nullable: false
  })
  where!: FlashcardScalarWhereInput;

  @TypeGraphQL.Field(_type => FlashcardUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlashcardUpdateManyMutationInput;
}
