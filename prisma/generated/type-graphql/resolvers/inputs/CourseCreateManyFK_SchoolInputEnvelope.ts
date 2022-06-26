import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateManyFK_SchoolInput } from "../inputs/CourseCreateManyFK_SchoolInput";

@TypeGraphQL.InputType("CourseCreateManyFK_SchoolInputEnvelope", {
  isAbstract: true
})
export class CourseCreateManyFK_SchoolInputEnvelope {
  @TypeGraphQL.Field(_type => [CourseCreateManyFK_SchoolInput], {
    nullable: false
  })
  data!: CourseCreateManyFK_SchoolInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
