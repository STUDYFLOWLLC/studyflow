import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyCreatedByUserInputEnvelope } from "../inputs/FlowCreateManyCreatedByUserInputEnvelope";
import { FlowCreateOrConnectWithoutCreatedByUserInput } from "../inputs/FlowCreateOrConnectWithoutCreatedByUserInput";
import { FlowCreateWithoutCreatedByUserInput } from "../inputs/FlowCreateWithoutCreatedByUserInput";
import { FlowScalarWhereInput } from "../inputs/FlowScalarWhereInput";
import { FlowUpdateManyWithWhereWithoutCreatedByUserInput } from "../inputs/FlowUpdateManyWithWhereWithoutCreatedByUserInput";
import { FlowUpdateWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/FlowUpdateWithWhereUniqueWithoutCreatedByUserInput";
import { FlowUpsertWithWhereUniqueWithoutCreatedByUserInput } from "../inputs/FlowUpsertWithWhereUniqueWithoutCreatedByUserInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateManyWithoutCreatedByUserInput", {
  isAbstract: true
})
export class FlowUpdateManyWithoutCreatedByUserInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutCreatedByUserInput], {
    nullable: true
  })
  create?: FlowCreateWithoutCreatedByUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutCreatedByUserInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutCreatedByUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpsertWithWhereUniqueWithoutCreatedByUserInput], {
    nullable: true
  })
  upsert?: FlowUpsertWithWhereUniqueWithoutCreatedByUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyCreatedByUserInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyCreatedByUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  set?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  delete?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereUniqueInput], {
    nullable: true
  })
  connect?: FlowWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpdateWithWhereUniqueWithoutCreatedByUserInput], {
    nullable: true
  })
  update?: FlowUpdateWithWhereUniqueWithoutCreatedByUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpdateManyWithWhereWithoutCreatedByUserInput], {
    nullable: true
  })
  updateMany?: FlowUpdateManyWithWhereWithoutCreatedByUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowScalarWhereInput[] | undefined;
}
