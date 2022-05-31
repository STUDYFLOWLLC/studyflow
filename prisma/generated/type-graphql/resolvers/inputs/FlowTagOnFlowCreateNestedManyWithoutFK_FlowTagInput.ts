import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope } from "../inputs/FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope";
import { FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput";
import { FlowTagOnFlowCreateWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowCreateWithoutFK_FlowTagInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowCreateNestedManyWithoutFK_FlowTagInput", {
  isAbstract: true
})
export class FlowTagOnFlowCreateNestedManyWithoutFK_FlowTagInput {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateWithoutFK_FlowTagInput], {
    nullable: true
  })
  create?: FlowTagOnFlowCreateWithoutFK_FlowTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput], {
    nullable: true
  })
  connectOrCreate?: FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope, {
    nullable: true
  })
  createMany?: FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowTagOnFlowWhereUniqueInput[] | undefined;
}
