import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportCreateManyFK_UserInputEnvelope } from "../inputs/BugReportCreateManyFK_UserInputEnvelope";
import { BugReportCreateOrConnectWithoutFK_UserInput } from "../inputs/BugReportCreateOrConnectWithoutFK_UserInput";
import { BugReportCreateWithoutFK_UserInput } from "../inputs/BugReportCreateWithoutFK_UserInput";
import { BugReportWhereUniqueInput } from "../inputs/BugReportWhereUniqueInput";

@TypeGraphQL.InputType("BugReportCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class BugReportCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [BugReportCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: BugReportCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BugReportCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: BugReportCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => BugReportCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: BugReportCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BugReportWhereUniqueInput], {
    nullable: true
  })
  connect?: BugReportWhereUniqueInput[] | undefined;
}
