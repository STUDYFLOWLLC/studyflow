import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput";
import { CourseOnTermAutomationCreateWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationCreateWithoutAutomationLogInput";
import { CourseOnTermAutomationUpdateWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationUpdateWithoutAutomationLogInput";
import { CourseOnTermAutomationUpsertWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationUpsertWithoutAutomationLogInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationUpdateOneWithoutAutomationLogInput", {
  isAbstract: true
})
export class CourseOnTermAutomationUpdateOneWithoutAutomationLogInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateWithoutAutomationLogInput, {
    nullable: true
  })
  create?: CourseOnTermAutomationCreateWithoutAutomationLogInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput, {
    nullable: true
  })
  connectOrCreate?: CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpsertWithoutAutomationLogInput, {
    nullable: true
  })
  upsert?: CourseOnTermAutomationUpsertWithoutAutomationLogInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseOnTermAutomationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateWithoutAutomationLogInput, {
    nullable: true
  })
  update?: CourseOnTermAutomationUpdateWithoutAutomationLogInput | undefined;
}
