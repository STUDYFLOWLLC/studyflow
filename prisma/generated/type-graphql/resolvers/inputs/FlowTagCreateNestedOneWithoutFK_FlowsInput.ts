import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagCreateOrConnectWithoutFK_FlowsInput } from "../inputs/FlowTagCreateOrConnectWithoutFK_FlowsInput";
import { FlowTagCreateWithoutFK_FlowsInput } from "../inputs/FlowTagCreateWithoutFK_FlowsInput";
import { FlowTagWhereUniqueInput } from "../inputs/FlowTagWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagCreateNestedOneWithoutFK_FlowsInput", {
  isAbstract: true
})
export class FlowTagCreateNestedOneWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => FlowTagCreateWithoutFK_FlowsInput, {
    nullable: true
  })
  create?: FlowTagCreateWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagCreateOrConnectWithoutFK_FlowsInput, {
    nullable: true
  })
  connectOrCreate?: FlowTagCreateOrConnectWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowTagWhereUniqueInput | undefined;
}
