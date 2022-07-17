import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAvgAggregate } from "../outputs/CourseOnTermAvgAggregate";
import { CourseOnTermCountAggregate } from "../outputs/CourseOnTermCountAggregate";
import { CourseOnTermMaxAggregate } from "../outputs/CourseOnTermMaxAggregate";
import { CourseOnTermMinAggregate } from "../outputs/CourseOnTermMinAggregate";
import { CourseOnTermSumAggregate } from "../outputs/CourseOnTermSumAggregate";

@TypeGraphQL.ObjectType("CourseOnTermGroupBy", {
  isAbstract: true
})
export class CourseOnTermGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CourseOnTermID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  Index!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Color!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Nickname!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  IsNew!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_CourseID!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_TermID!: number | null;

  @TypeGraphQL.Field(_type => CourseOnTermCountAggregate, {
    nullable: true
  })
  _count!: CourseOnTermCountAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermAvgAggregate, {
    nullable: true
  })
  _avg!: CourseOnTermAvgAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermSumAggregate, {
    nullable: true
  })
  _sum!: CourseOnTermSumAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermMinAggregate, {
    nullable: true
  })
  _min!: CourseOnTermMinAggregate | null;

  @TypeGraphQL.Field(_type => CourseOnTermMaxAggregate, {
    nullable: true
  })
  _max!: CourseOnTermMaxAggregate | null;
}
