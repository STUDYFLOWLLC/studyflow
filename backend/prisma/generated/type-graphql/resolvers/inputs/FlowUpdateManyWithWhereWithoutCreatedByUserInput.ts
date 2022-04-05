import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowScalarWhereInput } from "../inputs/FlowScalarWhereInput";
import { FlowUpdateManyMutationInput } from "../inputs/FlowUpdateManyMutationInput";

@TypeGraphQL.InputType("FlowUpdateManyWithWhereWithoutCreatedByUserInput", {
  isAbstract: true
})
export class FlowUpdateManyWithWhereWithoutCreatedByUserInput {
  @TypeGraphQL.Field(_type => FlowScalarWhereInput, {
    nullable: false
  })
  where!: FlowScalarWhereInput;

  @TypeGraphQL.Field(_type => FlowUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlowUpdateManyMutationInput;
}
