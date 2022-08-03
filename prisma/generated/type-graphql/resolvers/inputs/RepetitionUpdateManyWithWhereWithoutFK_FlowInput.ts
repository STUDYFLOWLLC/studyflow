import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionScalarWhereInput } from "../inputs/RepetitionScalarWhereInput";
import { RepetitionUpdateManyMutationInput } from "../inputs/RepetitionUpdateManyMutationInput";

@TypeGraphQL.InputType("RepetitionUpdateManyWithWhereWithoutFK_FlowInput", {
  isAbstract: true
})
export class RepetitionUpdateManyWithWhereWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => RepetitionScalarWhereInput, {
    nullable: false
  })
  where!: RepetitionScalarWhereInput;

  @TypeGraphQL.Field(_type => RepetitionUpdateManyMutationInput, {
    nullable: false
  })
  data!: RepetitionUpdateManyMutationInput;
}
