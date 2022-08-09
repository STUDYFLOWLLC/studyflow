import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportCreateManyFK_UserInputEnvelope } from "../inputs/BugReportCreateManyFK_UserInputEnvelope";
import { BugReportCreateOrConnectWithoutFK_UserInput } from "../inputs/BugReportCreateOrConnectWithoutFK_UserInput";
import { BugReportCreateWithoutFK_UserInput } from "../inputs/BugReportCreateWithoutFK_UserInput";
import { BugReportScalarWhereInput } from "../inputs/BugReportScalarWhereInput";
import { BugReportUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/BugReportUpdateManyWithWhereWithoutFK_UserInput";
import { BugReportUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/BugReportUpdateWithWhereUniqueWithoutFK_UserInput";
import { BugReportUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/BugReportUpsertWithWhereUniqueWithoutFK_UserInput";
import { BugReportWhereUniqueInput } from "../inputs/BugReportWhereUniqueInput";

@TypeGraphQL.InputType("BugReportUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class BugReportUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [BugReportCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: BugReportCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: BugReportCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: BugReportUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => BugReportCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: BugReportCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BugReportWhereUniqueInput], {
    nullable: true
  })
  set?: BugReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BugReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportWhereUniqueInput], {
    nullable: true
  })
  delete?: BugReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportWhereUniqueInput], {
    nullable: true
  })
  connect?: BugReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: BugReportUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: BugReportUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BugReportScalarWhereInput[] | undefined;
}
