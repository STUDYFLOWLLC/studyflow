import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagScalarWhereInput } from "../inputs/FlowTagScalarWhereInput";
import { FlowTagUpdateManyMutationInput } from "../inputs/FlowTagUpdateManyMutationInput";

@TypeGraphQL.InputType("FlowTagUpdateManyWithWhereWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowTagUpdateManyWithWhereWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => FlowTagScalarWhereInput, {
    nullable: false
  })
  where!: FlowTagScalarWhereInput;

  @TypeGraphQL.Field(_type => FlowTagUpdateManyMutationInput, {
    nullable: false
  })
  data!: FlowTagUpdateManyMutationInput;
}
