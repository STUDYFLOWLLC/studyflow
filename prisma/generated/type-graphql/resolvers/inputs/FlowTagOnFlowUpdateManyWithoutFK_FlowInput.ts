import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateManyFK_FlowInputEnvelope } from "../inputs/FlowTagOnFlowCreateManyFK_FlowInputEnvelope";
import { FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput";
import { FlowTagOnFlowCreateWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowCreateWithoutFK_FlowInput";
import { FlowTagOnFlowScalarWhereInput } from "../inputs/FlowTagOnFlowScalarWhereInput";
import { FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowInput";
import { FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowInput";
import { FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowInput } from "../inputs/FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowInput";
import { FlowTagOnFlowWhereUniqueInput } from "../inputs/FlowTagOnFlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowTagOnFlowUpdateManyWithoutFK_FlowInput", {
  isAbstract: true
})
export class FlowTagOnFlowUpdateManyWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateWithoutFK_FlowInput], {
    nullable: true
  })
  create?: FlowTagOnFlowCreateWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput], {
    nullable: true
  })
  connectOrCreate?: FlowTagOnFlowCreateOrConnectWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  upsert?: FlowTagOnFlowUpsertWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowCreateManyFK_FlowInputEnvelope, {
    nullable: true
  })
  createMany?: FlowTagOnFlowCreateManyFK_FlowInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowInput], {
    nullable: true
  })
  update?: FlowTagOnFlowUpdateWithWhereUniqueWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowInput], {
    nullable: true
  })
  updateMany?: FlowTagOnFlowUpdateManyWithWhereWithoutFK_FlowInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowTagOnFlowScalarWhereInput[] | undefined;
}
