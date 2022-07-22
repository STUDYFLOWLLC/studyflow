import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateManyFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationCreateManyFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateManyFK_CourseOnTermInput], {
    nullable: false
  })
  data!: CourseOnTermAutomationCreateManyFK_CourseOnTermInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
