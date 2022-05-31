import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope } from "../inputs/FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope";
import { FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput";
import { FlowTagOnFlowCreateWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowCreateWithoutFK_FlowTagInput";
import { FlowTagOnFlowScalarWhereInput } from "../inputs/FlowTagOnFlowScalarWhereInput";
import { FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowTagInput";
import { FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowTagInput";
import { FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowTagInput } from "../inputs/FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowTagInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpdateManyWithoutFK_FlowTagInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpdateManyWithoutFK_FlowTagInput {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateWithoutFK_FlowTagInput], {
    nullable: true
  })
  create?: FlowTagOnFlowCreateWithoutFK_FlowTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput], {
    nullable: true
  })
  connectOrCreate?: FlowTagOnFlowCreateOrConnectWithoutFK_FlowTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowTagInput], {
    nullable: true
  })
  upsert?: FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowTagInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope, {
    nullable: true
  })
  createMany?: FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowWhereUniqueInput], {
    nullable: true
  })
  set?: FlowTagOnFlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlowTagOnFlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowWhereUniqueInput], {
    nullable: true
  })
  delete?: FlowTagOnFlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowTagOnFlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowTagInput], {
    nullable: true
  })
  update?: FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowTagInput], {
    nullable: true
  })
  updateMany?: FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowTagOnFlowScalarWhereInput[] | undefined;
}
