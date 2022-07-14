import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_FlowViewInput } from "../inputs/FlowCreateOrConnectWithoutFK_FlowViewInput";
import { FlowCreateWithoutFK_FlowViewInput } from "../inputs/FlowCreateWithoutFK_FlowViewInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowCreateNestedOneWithoutFK_FlowViewInput", {
  isAbstract: true
})
export class FlowCreateNestedOneWithoutFK_FlowViewInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlowViewInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_FlowViewInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;
}
