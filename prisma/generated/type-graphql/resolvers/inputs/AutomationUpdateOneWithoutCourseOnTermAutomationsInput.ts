import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput";
import { AutomationCreateWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationCreateWithoutCourseOnTermAutomationsInput";
import { AutomationUpdateWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationUpdateWithoutCourseOnTermAutomationsInput";
import { AutomationUpsertWithoutCourseOnTermAutomationsInput } from "../inputs/AutomationUpsertWithoutCourseOnTermAutomationsInput";
import { AutomationWhereUniqueInput } from "../inputs/AutomationWhereUniqueInput";

@TypeGraphQL.InputType("AutomationUpdateOneWithoutCourseOnTermAutomationsInput", {
  isAbstract: true
})
export class AutomationUpdateOneWithoutCourseOnTermAutomationsInput {
  @TypeGraphQL.Field(_type => AutomationCreateWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  create?: AutomationCreateWithoutCourseOnTermAutomationsInput | undefined;

  @TypeGraphQL.Field(_type => AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  connectOrCreate?: AutomationCreateOrConnectWithoutCourseOnTermAutomationsInput | undefined;

  @TypeGraphQL.Field(_type => AutomationUpsertWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  upsert?: AutomationUpsertWithoutCourseOnTermAutomationsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AutomationWhereUniqueInput, {
    nullable: true
  })
  connect?: AutomationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AutomationUpdateWithoutCourseOnTermAutomationsInput, {
    nullable: true
  })
  update?: AutomationUpdateWithoutCourseOnTermAutomationsInput | undefined;
}
