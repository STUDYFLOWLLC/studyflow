import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateManyFK_FlowInputEnvelope } from "../inputs/FlowTagOnFlowCreateManyFK_FlowInputEnvelope";
import { FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput";
import { FlowTagOnFlowCreateWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowCreateWithoutFK_FlowInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowCreateNestedManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowTagOnFlowCreateNestedManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: FlowTagOnFlowCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: FlowTagOnFlowCreateManyFK_FlowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowTagOnFlowWhereUniqueInput[] | undefined;
}
