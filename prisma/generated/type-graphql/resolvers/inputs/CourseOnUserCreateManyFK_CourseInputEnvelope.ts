import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserCreateManyFK_CourseInput } from "../inputs/CourseOnUserCreateManyFK_CourseInput";

@TypeGraphQL.InputType("CourseOnUserCreateManyFK_CourseInputEnvelope", {
  isAbstract: true
})
export class CourseOnUserCreateManyFK_CourseInputEnvelope {
  @TypeGraphQL.Field(_type => [CourseOnUserCreateManyFK_CourseInput], {
    nullable: false
  })
  data!: CourseOnUserCreateManyFK_CourseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
