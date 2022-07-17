import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateManyFK_UserInputEnvelope } from "../inputs/FlowCreateManyFK_UserInputEnvelope";
import { FlowCreateOrConnectWithoutFK_UserInput } from "../inputs/FlowCreateOrConnectWithoutFK_UserInput";
import { FlowCreateWithoutFK_UserInput } from "../inputs/FlowCreateWithoutFK_UserInput";
import { FlowScalarWhereInput } from "../inputs/FlowScalarWhereInput";
import { FlowUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/FlowUpdateManyWithWhereWithoutFK_UserInput";
import { FlowUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/FlowUpdateWithWhereUniqueWithoutFK_UserInput";
import { FlowUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/FlowUpsertWithWhereUniqueWithoutFK_UserInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FlowUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FlowCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FlowCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: FlowUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlowCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FlowCreateManyFK_UserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FlowUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: FlowUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: FlowUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlowScalarWhereInput[] | undefined;
}
