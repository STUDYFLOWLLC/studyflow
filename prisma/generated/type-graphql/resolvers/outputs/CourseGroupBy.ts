import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseAvgAggregate } from "../outputs/CourseAvgAggregate";
import { CourseCountAggregate } from "../outputs/CourseCountAggregate";
import { CourseMaxAggregate } from "../outputs/CourseMaxAggregate";
import { CourseMinAggregate } from "../outputs/CourseMinAggregate";
import { CourseSumAggregate } from "../outputs/CourseSumAggregate";

@TypeGraphQL.ObjectType("CourseGroupBy", {
  isAbstract: true
})
export class CourseGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CourseID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  IsOfficial!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Term!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Code!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_ProfessorID!: number | null;

  @TypeGraphQL.Field(_type => CourseCountAggregate, {
    nullable: true
  })
  _count!: CourseCountAggregate | null;

  @TypeGraphQL.Field(_type => CourseAvgAggregate, {
    nullable: true
  })
  _avg!: CourseAvgAggregate | null;

  @TypeGraphQL.Field(_type => CourseSumAggregate, {
    nullable: true
  })
  _sum!: CourseSumAggregate | null;

  @TypeGraphQL.Field(_type => CourseMinAggregate, {
    nullable: true
  })
  _min!: CourseMinAggregate | null;

  @TypeGraphQL.Field(_type => CourseMaxAggregate, {
    nullable: true
  })
  _max!: CourseMaxAggregate | null;
}
