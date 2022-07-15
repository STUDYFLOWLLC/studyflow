import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowViewScalarWhereInput } from "../inputs/FlowViewScalarWhereInput";
import { FlowViewUpdateManyMutationInput } from "../inputs/FlowViewUpdateManyMutationInput";

@TypeGraphQL.InputType("FlowViewUpdateManyWithWhereWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowViewUpdateManyWithWhereWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowViewScalarWhereInput, {
    nullable: false
  })
  where!: FlowViewScalarWhereInput;

  @TypeGraphQL.Field(_type => FlowViewUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlowViewUpdateManyMutationInput;
}
